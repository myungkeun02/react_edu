import '../styles/Controller.css'

const Controller = ({onClickButton}) => {
    return (
        <div>
            <div>
                <button onClick={() => {
                    onClickButton(-1);
                    }}>-1</button>
                <button onClick={() => {
                    onClickButton(-10);
                    }}>-10</button>
                <button onClick={() => {
                    onClickButton(-100);
                    }}>-100</button>
                <button onClick={() => {
                    onClickButton(100);
                    }}>+100</button>
                <button onClick={() => {
                    onClickButton(10);
                    }}>+10</button>
                <button onClick={() => {
                    onClickButton(1);
                    }}>+1</button>

            </div>
        </div>
    );
}

export default Controller;