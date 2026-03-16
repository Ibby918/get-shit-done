/**
 * Regression tests for the context monitor hook.
 */

const { test, describe, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const HOOK_PATH = path.join(__dirname, '..', 'hooks', 'gsd-context-monitor.js');

describe('gsd-context-monitor hook', () => {
  let tmpDir;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gsd-context-monitor-test-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('exits silently when invoked without a metrics file', () => {
    const result = spawnSync(
      process.execPath,
      [HOOK_PATH],
      {
        cwd: tmpDir,
        input: JSON.stringify({ session_id: 'missing-metrics', cwd: tmpDir }),
        encoding: 'utf8',
      }
    );

    assert.strictEqual(result.status, 0, result.stderr);
    assert.strictEqual(result.stdout, '');
    assert.strictEqual(result.stderr, '');
  });
});
