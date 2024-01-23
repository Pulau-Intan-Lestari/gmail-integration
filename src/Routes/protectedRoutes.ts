import { Router } from 'express';
import passport from 'passport';
import { checkAuth } from '../Middleware/checkAuth';
const router = Router();

// Add passport middleware for JWT authentication
router.use(passport.authenticate('jwt', { session: false }));

router.get('/get-session', checkAuth(), (req, res) => {
    res.json(req.user);
});



export default router;