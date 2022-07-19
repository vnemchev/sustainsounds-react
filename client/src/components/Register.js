export const Register = () => {
    return (
        <form>
            <h1>Register</h1>

            <div>
                <label htmlFor="email">email: </label>
                <input type="email" id="email" name="email"></input>
            </div>

            <div>
                <label htmlFor="password">password: </label>
                <input type="password" id="password" name="password"></input>
            </div>

            <div>
                <label htmlFor="repeatPass">repeat password: </label>
                <input type="text" id="repeatPass" name="repeatPass"></input>
            </div>

            <div>
                <input type="checkbox" id="artistReg" name="artistReg"></input>
                <label htmlFor="artistReg">register as artist </label>
            </div>

            <div>
                <label htmlFor="alias">alias: </label>
                <input type="text" id="alias" name="alias"></input>
            </div>

            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    );
};
