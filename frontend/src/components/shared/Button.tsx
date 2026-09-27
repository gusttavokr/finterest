interface buttonProps {
    placeholder: string,

}

function Button(props: buttonProps) {

    return (
        <>
            <button className="bg-red-600 p-3 rounded-xl w-[80px] cursor-pointer text-white font-medium">{props.placeholder}</button>
        </>
    )
}

export default Button