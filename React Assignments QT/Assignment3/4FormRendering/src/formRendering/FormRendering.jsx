import "./FormRendering.css";

function FormRendering(){
    const fields = [
        { label: "Username", type: "text", name: "username" },
        { label: "Email", type: "email", name: "email" },
        { label: "Password", type: "password", name: "password" }
        ];

    return(
        <div className="Form">
            <form action="">
                {
                    fields.map((formData)=>{
                        return(
                            <div>
                            <label htmlFor={formData.name}>{formData.label}</label>
                            <input type={formData.type} name={formData.name}/>
                            </div>
                        )
                    })
                }
                <div>
                    <button  type="submit">Submit</button>
                </div>
            </form>

        </div>

    )
}
export default FormRendering;