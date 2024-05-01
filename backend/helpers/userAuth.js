import bcrypt, { genSalt } from 'bcrypt'


// function to hash password 

export const hashPassword = (password) =>{
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds)
    return hashedPassword;
}

// function to compare hasehd password

export const comparePassword = (password,hashedPassword) =>{
    return bcrypt.compare(password, hashedPassword)
}

