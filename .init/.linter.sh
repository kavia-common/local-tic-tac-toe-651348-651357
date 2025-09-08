#!/bin/bash
cd /tmp/kavia/workspace/code-generation/local-tic-tac-toe-651348-651357/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

