const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {mergePdfs} = require('./merge');
const path = require('path')
const app = express()
app.use('/static',express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  console.log(req.files);
  let fileName = await mergePdfs(path.join(__dirname, req.files[0].path),path.join(__dirname, req.files[1].path))
  res.redirect(`http://localhost:3000/static/${fileName}.pdf`)

})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})