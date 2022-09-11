import express from 'express'

import { updateUser, deleteUser } from '../Controllers/UserController.js'
import { verifyTokenAndAuthorization } from '../Middleware/verifyToken.js'

const router = express.Router();


router.put('/:id', verifyTokenAndAuthorization, updateUser)
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)


export default router;