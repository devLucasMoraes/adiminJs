import bcrypt from 'bcrypt'



export const creatPasswordHash = async (password) => {
    //const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, 12)
}

export const checkPassword =  (user, password) => {
    return bcrypt.compare(password, user.password_hash)
}