import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
    return (
        <RotatingLines 
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"
            visible={true}
        />
    );
};

export default Loading;