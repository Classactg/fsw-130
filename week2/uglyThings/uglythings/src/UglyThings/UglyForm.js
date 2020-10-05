import React, {Component} from "react"
class UglyForm extends Component {
    constructor() {
        super()
        this.state={
            imgUrl:"",
            title:"",
            description:"",
            uglyThings:[],
        }
    }
    handleChange=(e) => {
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    handleSubmit=(e) => {
        e.preventDefault()
        let newUserData={
            imgUrl:this.state.imgUrl,
            title:this.state.title,
            description:this.state.description,
        }
        this.setState({
            uglyThings:[newUserData,...this.state.uglyThings],
            imgUrl:"",
            title:"",
            description:"",

        })
        this.props.addOne(newUserData)
    }
render() {


return (
    <div>
      <form>
          <h1>Ugly Card</h1>
        {/* Form: Img URL, Title, Description, Submit Button  */}

        <input 
          placeholder="Img URL"
          type="text" 
          name="imgUrl"
          value={this.state.imgUrl}
          onChange={this.handleChange}
          required={true}/>

        
           <input 
          placeholder="Title"
          type="text" 
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          required={true}/>
          {/* <h1>Ugly Card</h1> */}


        <input 
          placeholder="Description"
          type="text" 
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          required={true}/>

          
           
          <button onClick={this.handleSubmit}>Click Me</button>
        </form>
         {/* <h1>{this.state.imgUrl}</h1> */}
    </div>
  )}}

  export default UglyForm
