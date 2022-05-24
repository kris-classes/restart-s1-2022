"""
TCP Client

Kris Pritchard / @krp

This is an instructive code example for teaching socket programming.
Run the server, then the client and type:
    send hello

Type exit to exit.
"""

import socket
import cmd


IP = 'localhost'
PORT = 1234


class Client(cmd.Cmd):
    """
    Simple TCP client for sending messages to TCP server.

    Try type the 'help' command without implementing a do_help method.
    """

    def do_send(self, line):
        """Runs when the 'send' command is typed into the interpreter."""

        # Print the line typed in
        print(f'line: {line}')
        # Add a newline
        msg = line + '\n'
        # Encode the message as UTF-8
        encoded_msg = msg.encode('utf-8')
        # Convert the encoded message to bytes before sending over the network.
        bytes_msg = bytes(encoded_msg)

        # Create the socket
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        # Connect
        client_socket.connect( (IP, PORT) )
        # Send the bytes
        client_socket.send(bytes_msg)
        # Close the socket
        client_socket.close()

        # TODO: Homework exercise. Add functionality to receive and
        # print replies from the server.

    def do_exit(self, line):
        """Runs when the users types 'exit'. """
        print('Exiting.')
        exit()

    def do_EOF(self, line):
        """Runs when the user pressed Ctrl-D (which sends EOF character)."""
        return True



if __name__ == '__main__':
    client = Client()
    client.cmdloop()
