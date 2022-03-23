{

























	if(dt == '')
	{
		alert('Điện thoại không được bỏ trống!');
		return false;
	}

	if(!emailPattern.test(e))
	{
		alert('Địa chỉ email không hợp lệ!');
		return false;
	}
	return true;
}