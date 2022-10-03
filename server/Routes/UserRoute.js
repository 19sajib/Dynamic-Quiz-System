import express from 'express'

import { updateUser, deleteUser, getUser } from '../Controllers/UserController.js'
import { verifyTokenAndAuthorization } from '../Middleware/verifyToken.js'

const router = express.Router();


router.get('/:id', verifyTokenAndAuthorization, getUser)
router.put('/:id', verifyTokenAndAuthorization, updateUser)
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)


export default router;