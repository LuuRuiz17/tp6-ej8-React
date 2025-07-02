import { Form, Button } from "react-bootstrap";

const Formulario = () => {
    return (
        <Form className="bg-form p-3 rounded mx-auto my-4 d-flex flex-column">
            <Form.Group className="mb-3 campoForm" controlId="formNombre">
                <Form.Label className="label-color">Nombre</Form.Label>
                <Form.Control className="input-color" type="text" placeholder="Ej: Luciana" />
            </Form.Group>
            <Form.Group className="mb-3 campoForm" controlId="formApellido">
                <Form.Label className="label-color">Apellido</Form.Label>
                <Form.Control className="input-color" type="text" placeholder="Ej: Luciana" />
            </Form.Group>
            <Form.Group className="mb-3 campoForm" controlId="formDNI">
                <Form.Label className="label-color">DNI</Form.Label>
                <Form.Control className="input-color" type="number" placeholder="Ej: Luciana" />
            </Form.Group>
            <Form.Group className="mb-3 campoForm" controlId="formEmail">
                <Form.Label className="label-color">Email address</Form.Label>
                <Form.Control className="input-color" type="email" placeholder="Ej: lucianaruiz.934@gmail.com" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Button className="btn-enviar w-50 mx-auto justify-content-center" type="submit">
                Enviar
            </Button>
        </Form>
    );
};

export default Formulario;