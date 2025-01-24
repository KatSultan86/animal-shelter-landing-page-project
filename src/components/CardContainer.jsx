export default function CardContainer({ children }) {
    return (
        <div className="container d-flex justify-content-center ">
            <div className="row mt-5 p-5 g-3 ">
                {children}
            </div>
        </div>

    )
}



