from datetime import date
from sqlalchemy import Date, func

from sqlalchemy.orm import Mapped, mapped_column


class CreationDateMixin:
    creation_date: Mapped[date] = mapped_column(
        Date(), server_default=func.current_date()
    )


class IsActiveMixin:
    is_active: Mapped[bool] = mapped_column(default=True)