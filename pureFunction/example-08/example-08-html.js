const flatten = ( list ) =>
  list.reduce( ( acc, el ) => acc.concat( el ), [] )

const compose = (...fns ) =>
  fns.reduce( ( f, g ) => (...args ) => f( g(...args ) ) )

const inputText = ( [ form, CONFIG ] ) => {
  const input = `<input type="text" name="${ CONFIG.input.text.name }">`
  return [ form.concat( input ), CONFIG ]
}

const inputEmail = ( [ form, CONFIG ] ) => {
  const input = `<input type="email" name="${ CONFIG.input.email.name }">`
  return [ form.concat( input ), CONFIG ]
}

const inputPassword = ( [ form, CONFIG ] ) => {
  const input = `<input type="pssword" name="${ CONFIG.input.password.name }">`
  return [ form.concat( input ), CONFIG ]
}

const inputSubmit = ( [ form, CONFIG ] ) => {
  const input = `<input type="submit" name="${ CONFIG.input.submit.name }">`
  return [ form.concat( input ), CONFIG ]
}

const tab = ( list ) => list.map( line => `	${ line }` )

const getForm = ( [ form, CONFIG ] ) => form
const fromArrayToString = ( list ) => list.join( '\n' )
const putInWrapper = ( elements ) => `<form>
${ elements }
</form>`

const makeForm = ( CONFIG ) =>
  compose(
    putInWrapper,
    fromArrayToString,
    tab,
    flatten,
    getForm,
    inputSubmit,
    inputPassword,
    inputEmail,
    inputText )( [ [], CONFIG ] )

const CONFIG = {
  input: {
    text: {
      name: 'name'
    },
    email: {
      name: 'email'
    },
    password: {
      name: 'password'
    },
    submit: {
      name: 'sendForm'
    }
  }
}
console.log( makeForm( CONFIG ) )
