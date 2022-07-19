import { useState } from 'react'
import axios from 'axios'
import { TiDelete } from 'react-icons/ti';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles.css'
import baseUrl from '../../tools/baseUrl';



const FileUploader = (props: any) => {

  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const {type, uploadedFileUri} = props
  let defaultImagePlaceHolder : string ;
  const defaultFilePlaceholder = 'https://image.winudf.com/v2/image/Y29tLlBSSVNTSS5XYWxscGFwZXIuQmxhY2suQmxhY2tCYWNrZ3JvdW5kV2FsbHBhcGVySERfc2NyZWVuXzBfMTUyOTQ1MzU1Nl8wMjM/screen-0.jpg?fakeurl=1&type=.jpg'
  const defaultUploadedFilePlaceholder = 'https://icon-library.com/images/icon-play/icon-play-7.jpg'

  switch(type){
	  case 'image' :
		defaultImagePlaceHolder = 'https://icon-library.com/images/icon-placeholder/icon-placeholder-5.jpg'
	  break;
	//   case 'video' :
	// 	defaultImagePlaceHolder = 'https://cdn.dribbble.com/users/10882/screenshots/14283617/media/42282464f67bfaf307fe06b3a3b57ee7.png?compress=1&resize=400x300'
	//   break;
  }
  

 
  const onInputChange = async (event: any) => {

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("uri", file);

    try {
	  setUploading(true)
      const instance = axios.create();

      const response = await instance({
        method: "post",
        url: baseUrl('/postContentFile'),
		data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent: any) => {
          let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted)
        }
      });
	  setUploading(false)

      if (props.onUploadSuccess) {
        props.onUploadSuccess(response);

		// console.log(response)
      }

    } catch (error) {
      if (props.onUploadingErrorHander)
        props.onUploadingErrorHander();

	  setUploading(false)
     
    }
  }


	const ImagePlaceHolder = () => {
		return ( 
			<div 
				onClick={()=> (uploadedFileUri) ? window.open(uploadedFileUri,'_blank') : false } 
				className='uploaderFilePlaceholder' style={{ backgroundImage : `url('${ uploadedFileUri || defaultImagePlaceHolder }')` }}>
				{ uploading && <CircularProgressbar value={progress} text={`${progress}%`} />}
			</div>)
	}

  const FilePlaceholder = () => {
	return (
	  <div 
	  	onClick={()=> (uploadedFileUri) ? window.open(uploadedFileUri,'_blank') : false }
	  	className='uploaderFilePlaceholder'
		style={{ backgroundImage : `url('${ (uploadedFileUri)  ? defaultUploadedFilePlaceholder : defaultFilePlaceholder }')` }}>
	  { uploading && <CircularProgressbar value={progress} text={`${progress}%`} /> }
	  </div>
	)
}


const VideoPlaceholder = () => {
	return (
	  <div 
	  	onClick={()=> (uploadedFileUri) ? window.open(uploadedFileUri,'_blank') : false }
	  	className='uploaderFilePlaceholder'
		style={{ backgroundImage : `url('${ (uploadedFileUri)  ? defaultUploadedFilePlaceholder : defaultImagePlaceHolder }')` }}>
	  { uploading && <CircularProgressbar value={progress} text={`${progress}%`} /> }
	  </div>
	)
}

 
  	return <>
	  		<div className='uploaderContainer'>
  					
					  {type === 'image' && <ImagePlaceHolder />}

					  {type === 'file' && <FilePlaceholder />}

					  {type === 'video' && <VideoPlaceholder />}

					<div className="uploaderUploadTrigger" onClick={() => 
							uploadedFileUri ? window.open(uploadedFileUri,'_blank') : document.getElementById(props.idInput)?.click() }>
						<span className='uploaderTextLabel'>
							{ uploadedFileUri || props.label }
						</span>
					</div>

					<div className='uploaderDeleteContainer'>
						{ uploadedFileUri && 
						<span 
							className='uploaderDeleteButtonTrigger' 
							onClick={()=> props.onPressDelete ? props.onPressDelete() : false}>
								<TiDelete className="icon-icon-plus" size={25} style={{marginRight:10}} color='red'/>
						</span> }
					</div>
		  	</div>

			<input type={'file'} id={props.idInput} style={{ display: 'none' }} onChange={onInputChange} />
	  </>



}

export default FileUploader