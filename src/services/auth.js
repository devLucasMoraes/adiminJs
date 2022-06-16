import bcrypt from 'bcryptjs'



export const creatPasswordHash = async (password) => {
    return bcrypt.hash(password, 8)
}

export const checkPassword = (user, password) => {
    return bcrypt.compare(password, user.password_hash)
}