import { Request } from 'express';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

export const jwtStrategy = (req: Request) => new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.APP_SECRET,
}, async (jwtPayload, done) => {
  try {
    const user = await req.prisma.sso_users.findFirst({ where: { id: jwtPayload.id } });
    return done(null, user || false);
  } catch (err) {
    return done(err, false);
  }
});