import request from 'supertest';
import app from '..';

describe('Basic App Tests', () => {
  it('should return hello message on root route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello');
  });

  it('should return healthy status on /health', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
})