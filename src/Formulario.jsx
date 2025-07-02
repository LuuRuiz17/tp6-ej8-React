import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const guardarDatos = (dato) => {
        if (dato.inputNombre && dato.inputApellido && dato.inputDNI && dato.inputEmail) {
            Swal.fire({
                title: "¡Datos enviados!",
                icon: "success",
                draggable: true
            });
        } else {
            Swal.fire({
                title: "Completa todos los datos",
                icon: "error",
                draggable: true
            });
        }
        reset()
    }

    return (
        <Form className="bg-form p-3 rounded mx-auto my-4 d-flex flex-column" onSubmit={handleSubmit(guardarDatos)}>
            <Form.Group className="campoForm" controlId="formNombre">
                <Form.Label className="label-color">Nombre</Form.Label>
                <Form.Control className="input-color" type="text" placeholder="Ej: Luciana" {...register('inputNombre',
                    {
                        minLength: {
                            value: 3,
                            message: "El nombre debe tener como mínimo 3 caracteres."
                        },
                        maxLength: {
                            value: 30,
                            message: "El nombre debe tener como máximo 30 caracteres."
                        }
                    })} />
            </Form.Group>
            <Form.Text className="text-danger">
                {errors.inputNombre?.message}
            </Form.Text>
            <Form.Group className="mt-2 campoForm" controlId="formApellido">
                <Form.Label className="label-color">Apellido</Form.Label>
                <Form.Control className="input-color" type="text" placeholder="Ej: Ruiz" {...register('inputApellido', {
                    minLength: {
                        value: 3,
                        message: 'El apellido debe tener como mínimo 3 caracteres.'
                    },
                    maxLength: {
                        value: 30,
                        message: 'El apellido debe tener como máximo 30 caracteres'
                    }
                })} />
            </Form.Group>
            <Form.Text className="text-danger">
                {errors.inputApellido?.message}
            </Form.Text>
            <Form.Group className="mt-2 campoForm" controlId="formDNI">
                <Form.Label className="label-color">DNI</Form.Label>
                <Form.Control className="input-color" type="number" placeholder="Ej: 45196868" {...register('inputDNI', {
                    pattern: {
                        value: /^\d{7,8}$/,
                        message: 'Ingresa un DNI válido. Por ejemplo: 45196868'
                    }
                })} />
            </Form.Group>
            <Form.Text className="text-danger">
                {errors.inputDNI?.message}
            </Form.Text>
            <Form.Group className="mt-2 campoForm" controlId="formEmail">
                <Form.Label className="label-color">Email address</Form.Label>
                <Form.Control className="input-color" type="email" placeholder="Ej: lucianaruiz.934@gmail.com" {...register('inputEmail', {
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Ingresa un email válido. Por ejemplo: lucianaruiz.934@gmail.com'
                    }
                })} />
            </Form.Group>
            <Form.Text className="text-danger">
                {errors.inputEmail?.message}
            </Form.Text>
            <button className="btn-enviar mx-auto justify-content-center mt-3 p-2 rounded" type="submit">
                Enviar
            </button>
        </Form>
    );
};

export default Formulario;