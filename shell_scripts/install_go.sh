#!/bin/sh
# Small script to download and install the Go programming language

VERSION=1.18
SHELL_PATH=$(echo $SHELL)  # These parentheses $( ) will run a command and use its output
SHELL_NAME=$(echo $SHELL_PATH | cut -d/ -f3)  # This changes '/bin/bash' to just 'bash'

echo "Downloading go ${VERSION}"  # whereas these braces ${ } will show a variable valie
echo "Shell is: ${SHELL}"

cd $HOME

# Download go
curl -L https://go.dev/dl/go${VERSION}.linux-amd64.tar.gz -o go${VERSION}.tar.gz

# Extract the zip file - this creates a 'go' directory in $HOME
tar zxvf go${VERSION}.tar.gz

# Update $PATH to point to go binaries
echo "export PATH=$HOME/go/bin:$PATH" >> $HOME/.${SHELL_NAME}rc  # Update the users shell.

echo "Run the following command to update PATH in your current shell:"
echo "    source ~/.${SHELL_NAME}rc"
