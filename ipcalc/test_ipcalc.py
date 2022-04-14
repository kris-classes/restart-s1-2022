from unittest import result
import pytest
from utils import number_to_binary, ip_to_binary, number_to_ip_mask

def test_0_returns_00000000():
    result = number_to_binary(0)
    assert result == '00000000'

def test_8_returns_00001000():
    result = number_to_binary(8)
    assert result == '00001000'

def test_ip_to_binary_with_0_works():
    result = ip_to_binary('0.0.0.0')
    assert result == '00000000.00000000.00000000.00000000'

def test_ip_to_binary_with_1_1_1_1_works():
    result = ip_to_binary('1.1.1.1')
    assert result == '00000001.00000001.00000001.00000001'

def test_ip_to_binary_with_255_255_255_255_works():
    result = ip_to_binary('255.255.255.255')
    assert result == '11111111.11111111.11111111.11111111'

def test_number_to_mask_with_0_works():
    result = number_to_ip_mask('0')
    assert result == '00000000.00000000.00000000.00000000'

def test_number_to_mask_with_24_works():
    result = number_to_ip_mask('24')
    assert result == '11111111.11111111.11111111.00000000'

def test_number_to_mask_with_32_works():
    result = number_to_ip_mask('32')
    assert result == '11111111.11111111.11111111.11111111'


