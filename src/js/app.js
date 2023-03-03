/* eslint-disable consistent-return */
export default function hp(user) {
  if (!user) {
    return;
  }
  if (user?.health > 50) {
    return 'healthy';
  }
  if (user?.health <= 50 && user?.health >= 15) {
    return 'wounded';
  }
  if (user?.health < 15) {
    return 'critical';
  }
}
