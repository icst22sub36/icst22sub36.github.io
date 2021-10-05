import os
import subprocess
import sys

NPX_CMD = ["node", "--experimental-modules",  "--es-module-specifier-resolution=node"]
JS_EXT = '.js'
MJS_EXT = '.mjs'
TEST262_FLAG = "--test262"

def write_errs_to_file(errs, output_path):
  err_log = open(output_path, 'w')
  for test_name in errs:
    e = errs[test_name].decode("utf-8")
    err_log.write('Error output for file: %s \n\n %s \n\n\n' % (test_name, e))
  err_log.close()


def run_js_npx_node(js_args):
  js_call = NPX_CMD.copy()
  args = js_call + js_args
  return subprocess.run(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def run_js_npx_babel(js_file, output_path):
  js_call = ["npx", "babel"]
  args = js_call + [js_file, "-o", output_path]
  return subprocess.call(args)

def run_js_node(js_args):
  js_call = ["node"]
  args = js_call + js_args
  return subprocess.run(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def is_js_file(file_name):
    return os.path.splitext(file_name)[1] == JS_EXT or os.path.splitext(file_name)[1] == MJS_EXT

def check_flag(flag):
  for i in range(len(sys.argv)):
    if (sys.argv[i] == flag):
      return True

def checkDirExistence(directory):
  if (not os.path.isdir(directory)):
    os.mkdir(directory)

def traverse_compile(walk_dir, func, out_dir):
  err_out = {}
  total_tests = 0
  for root, subdirs, files in os.walk(walk_dir):
    for filename in files:
      if is_js_file(filename):
        total_tests += 1
        file_path = os.path.join(root, filename)
        print('\t- Compiling file %s \t\t(full path: %s)' % (filename, file_path))
        args = get_js_args(file_path, out_dir)
        res = func(args)          
        if res.returncode != 0 and res.stderr:
          err_out[file_path] = res.stderr
  print('Compiled %s out of %s tests.' % ((total_tests - len(err_out)), total_tests))
  print('The following %s tests failed to compile:' % (len(err_out)))
  for test in err_out:
    print('\t - %s' % (test))

  return err_out

def get_js_args(test_file, out_dir):
  ret = ["index.js"]
  ret.append(test_file)
  ret.append(out_dir)
  if check_flag(TEST262_FLAG):
    ret.append(TEST262_FLAG)
  return ret

def caps(s):
  return s.capitalize()

def getNiceTestName(root, chop):
  r = root[len(chop):]
  r = r.split('/')
  r = map(caps, r)
  r = list(filter(None, r))
  return " ".join(list(r))
