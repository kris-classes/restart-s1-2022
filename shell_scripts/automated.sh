#!/bin/bash
# Usage: curl https://raw.githubusercontent.com/kris-classes/restart/main/shell_scripts/automated.sh | bash
#
curl https://raw.githubusercontent.com/MatthewKlemick/Centos_Scripts/main/re_Start_ascii.sh | bash
echo "Bash script to install all necessary packages."
alias la="ls -al"
sudo yum install -y tmux python3 fish strace zsh file gcc
sudo pip3 install pylint bpython pytest
echo "set-option repeat-time 10" >> ~/.tmux.conf
