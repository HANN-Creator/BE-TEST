const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: 회원가입
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: 12345678
 *               name:
 *                 type: string
 *                 example: 홍길동
 *     responses:
 *       201:
 *         description: 회원가입 성공
 */
router.post('/signup', (req, res) => {
  const { email, password, name } = req.body;
  console.log('회원가입:', email, password, name);
  res.status(201).json({ message: '회원가입 성공!' });
});

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: 로그인
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: 12345678
 *     responses:
 *       200:
 *         description: 로그인 성공
 *       401:
 *         description: 로그인 실패
 */
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === '12345678') {
    res.json({ token: 'fake-jwt-token', user: { name: '홍길동동' } });
  } else {
    res.status(401).json({ message: '로그인 실패' });
  }
});

module.exports = router;
