const PDFMerger = require('pdf-merger-js');
let merger = new PDFMerger();

const mergePdfs = async (pdf1,pdf2) => {
  let fileName = new Date().getTime()
  await merger.add(pdf1);  
  await merger.add(pdf2); 
  await merger.save(`public/${fileName}.pdf`); 
  return fileName
};

module.exports = {mergePdfs}