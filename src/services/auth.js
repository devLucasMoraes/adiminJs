import bcrypt from 'bcrypt'



export const creatPasswordHash = async (password) => {
    //const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, 12)
}

export const checkPassword =  (user, password) => {
    return bcrypt.compare(password, user.password_hash)
}

export const hasAdminPermission = (currentUser) => {
    return currentUser && currentUser.role === "admin"
}
export const hasManagerPermission = (currentUser) => {
    return currentUser && ["admin", "manager"].includes(currentUser.role)
}