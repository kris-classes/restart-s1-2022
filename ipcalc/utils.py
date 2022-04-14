# convert number from decimal to binary

def number_to_binary(number):
    '''
    Converts number into binary
    number: the number to convert
    '''
    return f'{number:08b}'

def ip_to_binary(ip):
    # split ip on dots
    result = ip.split('.')
    # unpack the octets
    a,b,c,d = result
    # convert octets to numbers
    a = int(a)
    b = int(b)
    c = int(c)
    d = int(d)

    # convert numbers to binary
    octet1 = number_to_binary(a)
    octet2 = number_to_binary(b)
    octet3 = number_to_binary(c)
    octet4 = number_to_binary(d)

    # join the octets together
    ip_as_binary = '.'.join([octet1,octet2,octet3,octet4])

    return ip_as_binary

def number_to_ip_mask(num):
    '''Convert number to ip mask'''
    # convert from string to number
    num = int(num)

    # create empty list
    my_list = []

    # add 32 '0' to list
    for i in range(32):
        my_list.append('0')

    # go through list and change 0 to 1 num times
    for i in range(num):
        my_list[i] = '1'

    # break list into octets
    octet1 = my_list[0:8]
    octet2 = my_list[8:16]
    octet3 = my_list[16:24]
    octet4 = my_list[24:32]

    # join bits into string
    octet1 = ''.join(octet1)
    octet2 = ''.join(octet2)
    octet3 = ''.join(octet3)
    octet4 = ''.join(octet4)

    # join list together
    ip = '.'.join([octet1,octet2,octet3,octet4])

    return ip

if __name__ == '__main__':
    # the_number = number_to_binary(8)
    # result = ip_to_binary('1.2.3.4')
    result = number_to_ip_mask(10)
