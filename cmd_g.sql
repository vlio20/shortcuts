select oo_id,
       oo_name,
       oo_first,
       oo_last,
       oo_date
from user
where oo_name LIKE %oo%
