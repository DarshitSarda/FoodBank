import { useNavigation } from '@react-navigation/core'
import React, {useState } from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, TextInput,View, TouchableOpacity, Alert} from 'react-native'


const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [emailverified, setEmailVerified]=useState(false);
  const [passwordverified, setPasswordVerified]=useState(false);
  const [password,setPassword]=useState('');


  const [doe,setDoe]=useState('');
  const [doeverified,setDoeVerified]= useState('');
  const [doeValidError, setDoeValidError]= useState('');

  const [name,setName]=useState('');
  const [nameverified,setNameVerified]= useState('');
  const [nameValidError, setNameValidError]= useState('');

  const [location,setLocation]= useState('');
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

    const handleValidDoe = val => {
        let reg = /^\d+$/;
        
        if (val.length === 0) {
          setDoeValidError('');
          setDoeVerified(false)
        } else if (reg.test(val) === false) {
    
          setDoeValidError('Invalid input');
          setDoeVerified(false)
        } else if (reg.test(val) === true) {
          setDoeValidError('');
          setDoeVerified(true);
          
        }
        };

        const handleValidName = val => {
            let reg = /^[a-zA-Z]+$/;
            
            if (val.length === 0) {
              setNameValidError('');
              setNameVerified(false)
            } else if (reg.test(val) === false) {
        
              setNameValidError('Only alphabets allowed');
              setNameVerified(false)
            } else if (reg.test(val) === true) {
              setNameValidError('');
              setNameVerified(true);
              
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
                    Alert("Both fields are blank")
                  }
                
                   else if (email==='') {
                      Alert("Email field cannot be blank")
                  }
                  else if (password===''){
                      Alert("Password field cannot be blank")
                    }
                    else if(emailverified===false)
                    {
                      Alert("Wrong email format");
                    }
                    else if(passwordverified===false)
                    {
                      Alert("Wrong password format");
                    }
                  else {
                      setError({field:'',message:''});
                      navigation.navigate('First')
                      Alert.alert("Congratulations you have successfully added to the inventory")
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
    //   behavior="padding"
    >
      
      <View style={styles.inputContainer}>
    <TextInput
    style={styles.input}
    placeholder="Name of Product"
    value={name}
    autoCorrect={false}
    autoCapitalize="none"
    onChangeText={value => {
      setName(value);
      handleValidName(value);
    }}
  />

{nameValidError ? <Text style={styles.error}>{nameValidError}</Text> : null}

<TextInput
    style={styles.input}
    placeholder="Quantity"
    value={password}
    keyboardType="numeric"
    onChangeText={value => {
      setPassword(value);
    }}
  />

{passwordValidError ? <Text style={styles.error}>{passwordValidError}</Text> : null}
<TextInput
    style={styles.input}
    placeholder="Days before which product expires"
    value={doe}
    autoCorrect={false}
    autoCapitalize="none"
    onChangeText={value => {
      setDoe(value);
      handleValidDoe(value);
      
    }}
   />
  {doeValidError ? <Text style={styles.error}>{doeValidError}</Text> : null}
  
  <TextInput
    style={styles.input}
    placeholder="Location"
    value={location}
    keyboardType="url"
    autoCorrect={false}
    autoCapitalize="none"
    onChangeText={value => {
      setLocation(value);
    }}
  />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onSignInPressed}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add to inventory</Text>
        </TouchableOpacity>
        
        
      </View>
    </KeyboardAvoidingView>
  )
}

export default AdminLogin

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