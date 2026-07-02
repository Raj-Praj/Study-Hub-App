import z from "zod"

export const RegisterSchema=z.object({
    name:z.string().max(40).trim().nonempty(),
    email:z.email().nonempty(),
    password:z.string()
            .regex(/[a-z]/,"Password should contain atleast one small letter")
            .regex(/[A-Z]/,"Include a Capital letter too")
            .regex(/[0-9]/,"How about adding a Number?")
            .min(8,"Password should be atleast 8 characters long")
            .max(30,"Password should be atmost of 30 characters long only"),
    cpassword:z.string().nonempty()
}).refine((val)=>val.password===val.cpassword,{
    message:"Re-password should match with above Password",
    path:['cpassword']
})