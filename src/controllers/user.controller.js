import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js" 
import uplodOnCloudinary from "../utils/cloudinary.js"
import  ApiRespons  from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req,res)=>{
           // get user dettails from frontend
           // validation -not empty
           // check if user already exists : userName ,email
           // check for images, check for avatar
           // upload them to cloudinary,avatar
           // create user object -create entry in db
           // remove password and refresh token field from response
           // check for user creation
           // return res

        const{fullName,email,username,password}=req.body
       
        console.log("email:",email);

       if (
        !fullName ||[fullName,email,username,password].some((field)=>
            field?.trim() === "")
       ) {
        throw new ApiError(400,"All fields are required")
    } 
    
    const existedUser = User.findOne({
        $or:[{username}, {email}]    
        
    })
    if (existedUser) {
        throw new ApiError(409,"User already exists")
        
    }

       const avatarLocalPath =  req.files?.avatar[0]?.path
       const coverImageLocalPath = req.files?.coverImage[0]?.
       path;

       if (!avatarLocalPath){
        throw new ApiError(400,"Avatar is required")
       }

      const avatar = await uplodOnCloudinary(avatarLocalPath)
      const coverImage = await uplodOnCloudinary
      (coverImageLocalPathf)  

      if (!avatar) {
            throw new ApiError(400, "Avatar file is required")
      }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url ||"",
        email,
        password,
        username:username.toLowerCase()

      })
      const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
      )

      if (!createdUser) {
        throw new ApiError(500, "Somthing want wrong while registring the user")
      }

      return res.status(201).json(
        new ApiRespons(200, createdUser, "User registerd successfully ")
      )
})




export {registerUser}