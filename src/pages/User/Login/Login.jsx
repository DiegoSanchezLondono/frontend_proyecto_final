import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postLogin } from '../../../services/apiCalls';
import { Decoder, errorCheck } from '../../../services/utiles';

//RDX imports......
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from '../userSlice';

import './Login.css';
import '../../../common/InputText/InputText.css';

export const Login = () => {

    //Instancia de métodos de Redux
    const dispatch = useDispatch();

    const datosReduxUsuario = useSelector(userData);

    //Hooks
    const [credenciales, setCredenciales] = useState({
        email: '',
        password: ''
    })
    const [credencialesError, setErrorCredenciales] = useState({
        emailError: '',
        passwordError: ''
    })

    //Variables y constantes
    const navigate = useNavigate();

    //Handlers
    const InputHandler = (e) => {
        
        //Bindear (atar)
        setCredenciales((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;
    }

    //Funciones
    const Logeame = () => {
       
                //Check para saber si tenemos un error.......

        //Este for in va a recorrer el objeto de js en busqueda de que una sola de sus propiedades
        //tenga un valor distinto de comillas vacias, es decir, haya un error presente
        for (const property in credencialesError) {
            if(credencialesError[property] !== ''){
                 return;
            }
         }

        //Desde aqui llamamos al servicio....
        postLogin(credenciales) //se trae el token del back 
            .then(
                resultado => {
                    console.log(resultado);

                    //Ahora yo decodificaría el token... 

                    //Una vez decodificado, guardaría los datos de usuario y el token,
                    //ambas cosas en REDUX, para usarlas cuando yo quiera

                    let decodificado = Decoder(resultado.data.token);
                    console.log(decodificado, 'resultadoooo');

                    let userPass = {
                        token : resultado.data.token, // estos datos serian el payload //
                        user: decodificado.usuario[0]

                    }

                    //Finalmente, guardo en RDX....

                    //Guardo mediante la ACCIÓN login, los datos del token y del token decodificado (datos de usuario)
                    dispatch(login({userPass: userPass}));


                    //Finalmente, navego y te llevo a home en casi un segundo de delay
                    setTimeout(()=>{
                        navigate("/")
                    },500);
                }
            )
            .catch(error => console.log(error));
    }

    useEffect(()=>{
        if(datosReduxUsuario.userPass.token !== ''){
            navigate("/");
        }
    },[])

    const loginErrorHandler = (e) => {
        
        let error = '';

        error = errorCheck(e.target.name, e.target.value);


        setErrorCredenciales((prevState)=>({...prevState, 
            [e.target.name + 'Error'] : error
        }));
    }

    return (
        <div className='loginDesign'>
            {/* <pre>{JSON.stringify(credenciales, null, 2)}</pre> */}
            Email
            <InputText 
                type={"email"} 
                name={"email"} 
                className={credencialesError.emailError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={"Escribe tu email"} 
                functionHandler={InputHandler}
                errorHandler={loginErrorHandler}
            />
            <div className='errorText'>{credencialesError.emailError}</div>
            Password
            <InputText 
                type={"password"}  
                name={"password"} 
                className={credencialesError.passwordError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
                placeholder={"Escribe tu contraseña"} 
                functionHandler={InputHandler}
                errorHandler={loginErrorHandler}
            />
            <div className='errorText'>{credencialesError.passwordError}</div>
            
            <div className='loginButtonDesign' onClick={()=>Logeame()}>LOGIN</div>
        </div>
    );
};