export default {
  name: 'resume',
  type: 'document',
  title: 'Resume',
  fields: [{
    name: 'file',
    type: 'file',
    title: 'File',
    options: {
      accept: '.pdf, .docx',
    }
  }]
}