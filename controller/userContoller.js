const User = require("../models/users");

module.exports = {
    registerUser: async (req, res) => {
        try {
            const { mobileNo } = req.body;
            const existingUser = await User.findOne({ mobileNo });
            if (existingUser) {
                return res.status(200).json({ message: 'Login successful!',data:existingUser });
            }
            const newUser = new User({ mobileNo });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully!' ,data:newUser});
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getAllUser:async(req,res)=>{
        try{
            var users = await User.find();
            res.status(201).json({ message: 'All user get successfully!' ,data:users});


        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}
