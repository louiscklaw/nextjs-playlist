const bcrypt = require('bcrypt')

async function helloworld(req) {
  try {
    bcrypt.compare(`incoming_password`, `user_found.password`, function (err, result) {
      console.log('helloworld')
    })
    return { status: 'OK' }
  } catch (error) {
    console.error(error)
  }
}

async function handler(req, res) {
  try {
    let result = await helloworld(req)

    return res.status(200).send(result)
  } catch (err) {
    console.log(err)
    res.status(200).send({ status: 'error', message: 'helloworld error' })
  }
}

export default handler
