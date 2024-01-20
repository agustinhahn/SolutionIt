import Spinner from 'react-native-loading-spinner-overlay';

const Loader = () => {
    return (
        <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
    />
    )
}

export default Loader