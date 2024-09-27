<script lang='ts'>
    import Field from "@components/Field.svelte";
    import Submit from "@components/admin/Submit.svelte";
    import { onMount } from "svelte";

    let reCaptchaToken = ''

    function onCaptchaVerified(token: string) {
        reCaptchaToken = token
        console.log('reCAPTCHA token: ', token)
    }

    onMount(() => {
        const script = document.createElement('script')
        script.src = "https://www.google.com/recaptcha/api.js?render=explicit"
        script.async = true
        script.defer = true

        script.onload = () => {
            console.log("reCAPTCHA ha terminado de cargar");

            // Usamos setTimeout para asegurarnos que grecaptcha esté disponible
            setTimeout(() => {
                if (window.grecaptcha) {
                    const recaptchaElement = document.querySelector('#g-recaptcha')
                    if (recaptchaElement) {
                        window.grecaptcha.render(recaptchaElement as HTMLElement, {
                            'sitekey': '6LcSCFAqAAAAAK7zxz7oUrO3oZMnPQU_sJn9hS86',
                            'callback': onCaptchaVerified
                        })
                    }
                } else {
                    console.error("el grecaptcha no es valido")
                }
            }, 500) // Intentar renderizar después de medio segundo
        }

        script.onerror = () => {
            console.error("Failed to load reCAPTCHA script");
        };

        document.body.appendChild(script);
    });

    function handleSubmit(event: Event) {
        event.preventDefault();
        if (reCaptchaToken === '') {
            alert('Por favor completa el reCAPTCHA');
        } else {
            console.log('Formulario enviado con token:', reCaptchaToken);
        }
    }
</script>



<form class="form-container" on:submit={handleSubmit}>
    <h1>¿Olvidaste tu contraseña?</h1>

    <p>Escribe aquí tu número de telefono asociado a tu cuenta para recordartelo</p>
    <Field 
        name="phone" 
        label="Número de teléfono" 
        placeholder="Ingrese su número de teléfono" 
        regex={{ pattern: /^[0-9]+$/, message: "Solo se permiten números" }} 
        required="Este campo es obligatorio" 
        logic={(value) => value.length < 10 ? "Ingrese como mínimo 10 números" : undefined} 
    />

    <div class="recaptcha-container">
        <div class="g-recaptcha" id="g-recaptcha"></div> <!-- Contenedor para reCAPTCHA -->
    </div>

    <Submit>Enviar</Submit>
</form>

<style lang='sass' global>
@use 'src/lib/styles/palete' as palete
@use 'src/lib/styles/admin/elements' as elements

.form-container
    @include elements.section()
    @include elements.center-form()

    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    gap: 20px

    width: 50%
    max-width: 30em
    min-width: 20em
    
    margin-bottom: 40px

    padding: 2em
</style>
