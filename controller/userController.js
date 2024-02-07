const User =require('../controller/users');

module.exports = {
    registerUser: async (req, res) => {
        try {
            const { mobileNo } = req.body;
            const existingUser = await User.findOne({ mobileNo });
            if (existingUser) {
                console.log(existingUser);
                return res.status(200).json({ message: 'Login successful!', data: existingUser });
            }
            const newUser = new User({ mobileNo });
            console.log(newUser);
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully!', data: newUser });
        } catch (err) {
            console.error(err)
            res.status(500).json({ error: err.message });
        }
    },    
    getAllUser:async(req,res)=>{
        try {
            const nonAdminUsers = await User.find({ isAdmin: false });
        
            res.status(200).json({ message: 'Non-admin users retrieved successfully!', data: nonAdminUsers });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    },

    updateUser: async (req, res) => {
        try {
            
            const adminUser = await User.findById(req.params.id);
            if (!adminUser.isAdmin) {
                return res.status(403).json({ error: 'Unauthorized access' });
            }
            const { id, mobileNo } = req.body;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            user.mobileNo = mobileNo;
            await user.save();

            res.status(200).json({ message: 'User mobile number updated successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const adminUser = await User.findById(req.params.id);
            if (!adminUser.isAdmin) {
                return res.status(403).json({ error: 'Unauthorized access' });
            }
            const { id,} = req.body;
            const user = await User.findByIdAndDelete(id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateProfile:async(req,res)=>{
        const userId = req.params.id;
        const updateData = req.body; 
      
        try {
          const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
      
          if (!updatedUser) {
            return res.status(404).json({ error: 'User not found'});
          }
          res.status(200).json({ message: 'User profile updated successfully', data: updatedUser });
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
       }
    }
}
