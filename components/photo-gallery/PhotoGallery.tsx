import React from 'react';
import styled from 'styled-components';

const StyledPhotoGallery = styled.div`

`

const StyledPhoto = styled.img`

`

const photos = []

const Photo = (props) => <StyledPhoto {...props} />

export default () => (
    <StyledPhotoGallery>
        {photos.map(photo => <Photo {...photo} />)}
    </StyledPhotoGallery>
)