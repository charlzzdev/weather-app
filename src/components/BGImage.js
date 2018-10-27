import React, {Component} from 'react';

class BGImage extends Component{
      state = {
            uploadedBy: '',
            imgURL: ''
      };

      getBGImage = () => {
            if(this.props.cityName.length > 1){
                  fetch(`https://pixabay.com/api/?key=10502301-b8634146e3117a7fb9fc0a652&q=${this.props.cityName}&safesearch=true&per_page=3`)
                        .then(response => response.json())
                        .then(data => {
                              if(data.hits.length > 0){
                                    this.setState({
                                          uploadedBy: data.hits[0].user,
                                          imgURL: data.hits[0].largeImageURL
                                    });
                              } else {
                                    fetch('https://pixabay.com/api/?key=10502301-b8634146e3117a7fb9fc0a652&q=blue+sky&safesearch=true&per_page=3')
                                          .then(response => response.json())
                                          .then(data => {
                                                this.setState({
                                                      uploadedBy: data.hits[0].user,
                                                      imgURL: data.hits[0].largeImageURL
                                                });
                                          });
                              }
                        });
            }
      }

      componentDidMount(){
            this.getBGImage();
      }

      componentWillReceiveProps(){
            if(this.props.readyToUpdate === true){
                  this.getBGImage();
            }
      }

      render(){
            return(
                  <img src={this.state.imgURL} alt="" title={"Uploaded by " + this.state.uploadedBy + " on Pixabay.com"}/>
            )
      }
}

export default BGImage;