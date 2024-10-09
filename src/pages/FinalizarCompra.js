import '../Estilos/FinalizarCompra.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Form, Button, Col, Row,} from 'react-bootstrap';

const FinalizarCompra = ({ carrito, actualizarCantidadProducto, eliminarProducto }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    nombreTarjeta: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarFormulario = () => {
    let errores = {};
    
    // Validación del email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errores.email = 'Email inválido';
    }
    
    // Validación de la dirección
    if (formData.direccion.trim() === '') {
      errores.direccion = 'La dirección es requerida';
    }
    
    // Validación del número de tarjeta (debe tener 16 dígitos)
    if (!/^\d{16}$/.test(formData.numeroTarjeta)) {
      errores.numeroTarjeta = 'Número de tarjeta inválido';
    }
    
    // Validación de la fecha de expiración (formato MM/AA)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.fechaExpiracion)) {
      errores.fechaExpiracion = 'Fecha de expiración inválida';
    }
    
    // Validación del CVV (3 o 4 dígitos)
    if (!/^\d{3,4}$/.test(formData.cvv)) {
      errores.cvv = 'CVV inválido';
    }

    setErrors(errores);
    return Object.keys(errores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      // Aquí iría la lógica para procesar el pago
      console.log('Formulario válido, procesando pago...');
    } else {
      console.log('Formulario inválido');
    }
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price * producto.cantidad, 0);
  };

  return (
    <div className="finalizar-compra-container mt-5">
      <h1 className="finalizar-compra-header mb-4">Finalizar Compra</h1>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <table className="finalizar-compra-table table">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.name}</td>
                <td>
                  <button 
                    className="finalizar-compra-btn finalizar-compra-btn-outline-primary me-2"
                    onClick={() => actualizarCantidadProducto(producto.id, producto.cantidad - 1)}
                    disabled={producto.cantidad <= 1}
                  >
                    -
                  </button>
                  {producto.cantidad}
                  <button 
                    className="finalizar-compra-btn finalizar-compra-btn-outline-primary ms-2"
                    onClick={() => actualizarCantidadProducto(producto.id, producto.cantidad + 1)}
                  >
                    +
                  </button>
                </td>
                <td>${producto.price}</td>
                <td>${producto.price * producto.cantidad}</td>
                <td>
                  <button 
                    className="finalizar-compra-btn finalizar-compra-btn-danger"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="finalizar-compra-total">
        <h3>Total: ${calcularTotal()}</h3>
        <Link to="/">
          <button className="finalizar-compra-btn finalizar-compra-btn-success me-3">Seguir Comprando</button>
        </Link>
      </div>

      {!showForm ? (
        <Button onClick={() => setShowForm(true)}>Realizar pago</Button>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  isInvalid={!!errors.direccion}
                />
                <Form.Control.Feedback type="invalid">{errors.direccion}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  name="codigoPostal"
                  value={formData.codigoPostal}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre en la tarjeta</Form.Label>
                <Form.Control
                  type="text"
                  name="nombreTarjeta"
                  value={formData.nombreTarjeta}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Número de tarjeta</Form.Label>
                <Form.Control
                  type="text"
                  name="numeroTarjeta"
                  value={formData.numeroTarjeta}
                  onChange={handleInputChange}
                  isInvalid={!!errors.numeroTarjeta}
                />
                <Form.Control.Feedback type="invalid">{errors.numeroTarjeta}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fecha de expiración (MM/AA)</Form.Label>
                <Form.Control
                  type="text"
                  name="fechaExpiracion"
                  value={formData.fechaExpiracion}
                  onChange={handleInputChange}
                  isInvalid={!!errors.fechaExpiracion}
                />
                <Form.Control.Feedback type="invalid">{errors.fechaExpiracion}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  isInvalid={!!errors.cvv}
                />
                <Form.Control.Feedback type="invalid">{errors.cvv}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Confirmar pago</Button>
        </Form>
      )}
    </div>
  );
};

export default FinalizarCompra;
