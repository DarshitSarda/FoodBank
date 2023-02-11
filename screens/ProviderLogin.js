import { useNavigation } from '@react-navigation/core'
import React, {useState } from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, TextInput,View, TouchableOpacity} from 'react-native'


const ProviderLogin = () => {
  const [email, setEmail] = useState('')
  const [emailverified, setEmailVerified]=useState(false);
  const [passwordverified, setPasswordVerified]=useState(false);
  const [password,setPassword]=useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [passwordValidError, setPasswordValidError] = useState('');
  const [error,setError]=useState({field:'', message: ''});


  const navigation = useNavigation()

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         navigation.replace("Home")
//       }
//     })

//     return unsubscribe
//   }, [])

  const handleCreateNew = () => {
    navigation.navigate("Areg");

  }

  const handleLogin = () => {
    navigation.navigate("Home");
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (val.length === 0) {
          setEmailValidError('');
          setEmailVerified(false)
        } else if (reg.test(val) === false) {

          setEmailValidError('Enter valid email address');
          setEmailVerified(false)
        } else if (reg.test(val) === true) {
          setEmailValidError('');
          setEmailVerified(true);
          
        }
  }

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (val.length === 0) {
      setEmailValidError('');
      setEmailVerified(false)
    } else if (reg.test(val) === false) {

      setEmailValidError('Enter valid email address');
      setEmailVerified(false)
    } else if (reg.test(val) === true) {
      setEmailValidError('');
      setEmailVerified(true);
      
    }
    };

      const handleValidPassword = val => {
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        
        if (val.length === 0) {
          setPasswordValidError('');
          setPasswordVerified(false)
        } else if (reg.test(val) === false) {
          setPasswordValidError('A password should contain a capital letter, a number, a special character and a minimum length of 8');
          setPasswordVerified(false)
        } else if (reg.test(val) === true) {
          setPasswordValidError('');
          setPasswordVerified(true);
        }
        };

            const onSignInPressed =val=>{
                let signinerror = {field:'', message: ''};
          
                if(email==='' && password==='')
                  {
                    alert("Both fields are blank")
                  }
                
                   else if (email==='') {
                      alert("Email field cannot be blank")
                  }
                  else if (password===''){
                      alert("Password field cannot be blank")
                    }
                    else if(emailverified===false)
                    {
                      alert("Wrong email format");
                    }
                    else if(passwordverified===false)
                    {
                      alert("Wrong password format");
                    }
                  else {
                      setError({field:'',message:''});
                      navigation.navigate('Home')
                  }
                }
                    
                  {/*let signinerror = {field:'', message: ''};
                  if (email==='') {
                      signinerror.field='email';
                      signinerror.message='Invalid Email ID';
                      setError(signinerror);
                  }
                  else if (password===''){
                      signinerror.field='password';
                      signinerror.message='Please enter correct password';
                      setError(signinerror);
                  }
                  else {
                      setError({field:'',message:''});
                      navigation.navigate("Bottom Nav");
                  }*/}
              const onCreatePressed = () =>{
              navigation.navigate("Sign Up");
              } 
              const onForgotPasswordPressed = () =>{ 
                  navigation.navigate("Forgot Password");
              };
          
              const onSignInFacebook = () =>{
                  console.warn('Signing in with Facebook')
              };
              const onSignInGoogle = () =>{
                  googleLogin();
              };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      
      <View style={styles.inputContainer}>
      <TextInput
    style={styles.input}
    placeholder="Email"
    value={email}
    autoCorrect={false}
    autoCapitalize="none"
    onChangeText={value => {
      setEmail(value);
      handleValidEmail(value);
    }}
  />

{emailValidError ? <Text style={styles.error}>{emailValidError}</Text> : null}

<TextInput
    style={styles.input}
    placeholder="Password"
    value={password}
    secureTextEntry={true}
    onChangeText={value => {
      setPassword(value);
      handleValidPassword(value);
    }}
  />

{passwordValidError ? <Text style={styles.error}>{passwordValidError}</Text> : null}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onSignInPressed}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Provider Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', color: 'black'}}>
              or
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        <TouchableOpacity
          onPress={onSignInPressed}
          style={styles.button2}
        >
          <Text style={styles.buttonOutlineText}>Dont have an account? Create one </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ProviderLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  buttonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#804fb3',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:10,
    marginTop:20,
    shadowColor: '#571e22',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  button2:{
    marginTop:10
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#804fb3',
    borderWidth: 2,
  },
  buttonText: {
    textAlign:'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#804fb3',
    fontWeight: '700',
    fontSize: 16,
  },
  logo: {
    width: '100%',
    maxWidth: 900,
    height: 350,
  },
  error:{
    color:'red'
  } 
})