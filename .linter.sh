#!/bin/bash
cd /home/kavia/workspace/edusphere-main-container-for-edusphere-3811-3818/core_component_for_edusphere
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

