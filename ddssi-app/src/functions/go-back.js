import { useHistory  } from 'react-router-dom';

const BackFunction = () =>{

    const history = useHistory();

    const back = () => {

        history.goBack();
    }
  
    return back;
}

export default BackFunction;