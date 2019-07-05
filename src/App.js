import React from 'react'
import marked from 'marked'
import {Componant} from 'react'
import ReactDOM from 'react-dom'
import hljs from 'highlight.js';




const initialMarkdown= `
### Headers
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List 
- list item one
- list item two
- list item three
### links
[My Github](https://github.com/Samk13)
[My LinkedIn](https://www.linkedin.com/in/samarbid/)

### Text Decorations
*italic* and **bold**
### Images 
![](https://apprecs.org/ios/images/app-icons/256/96/343544214.jpg)

### Blockquote
> life will give you what ever you think of .
### code 
\` npm install create-react-app -g \`
\`\`\`
const x = 10 ;
const y = 15;
let func(x,y) => (x+y);
console.log (func);
\`\`\`
`

let renderer = new marked.Renderer()
renderer.link = function(href, title, text){
  return `<a href=${href} target= '_blank'>${text}</a>`
}
marked.setOptions({
  renderer:renderer,
  breaks: true,
  highlight: function(code){
    return hljs.highlightAuto(code).value
  }
})

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markdown: initialMarkdown
    }
  }
  handelChange = e => this.setState({markdown: e.target.value})


  render(){
    return(
      <div>
        <div><h1>Markdown Preview</h1></div>
        <div className='container'>
          <div className='left'>
            <textarea id='editor'
             value={this.state.markdown}
              onChange={this.handelChange}/>
          </div>
          <div className='right'>
            <div id='preview'
            dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
        
            
          </div>


        </div>

      </div>

    )
  }

}

export default App;
